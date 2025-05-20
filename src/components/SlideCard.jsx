import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

const SlideCard = ({
  imgSrc,
  imgAlt,
  title,
  price,
  children,
  heatLevel = 0,
  maxHeatLevel = 5,
  isAddingToCart = false,
  onAddToCart,
  currency = '₹',
  locale = 'en-IN',
  heatLabel = 'Heat Level',
  theme = {},
  enableDrag = false,
  onDragStart,
  onDragEnd,
}) => {
  // State management
  const [hasImageError, setHasImageError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Theme configuration with fallbacks
  const mergedTheme = useMemo(() => ({
    '--card-bg': '#f9fafb',
    '--text-primary': '#1f2937',
    '--text-secondary': '#4b5563',
    '--price-color': '#ea580c',
    '--heat-active': '#ff5714',
    '--heat-inactive': '#d1d5db',
    '--button-from': '#f97316',
    '--button-to': '#dc2626',
    '--success-bg': '#22c55e',
    '--hover-scale': '1.02',
    '--card-radius': '0.75rem',
    ...theme,
  }), [theme]);

  // Memoized heat level indicators
  const heatLevels = useMemo(() => 
    Array.from({ length: maxHeatLevel }).map((_, index) => ({
      active: index < heatLevel,
      key: `heat-${index}`,
    })), [heatLevel, maxHeatLevel]);

  // Price formatting with error handling
  const formatPrice = useCallback(() => {
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currencyDisplay: 'symbol',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price).replace('INR', currency);
    } catch (error) {
      console.error('Price formatting error:', error);
      return `${currency}${price.toLocaleString(locale)}`;
    }
  }, [price, locale, currency]);

  // Image fallback handling
  const fallbackImage = useMemo(() => 
    `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F3F4F6"/>
        <path d="M100 120L150 180H50L100 120Z" fill="#E5E7EB"/>
        <circle cx="100" cy="120" r="4" fill="#6B7280"/>
        <path d="M300 150H250V200H300V150Z" fill="#E5E7EB"/>
      </svg>
    `)}`, []);

  // Drag handlers
  const handleDragStart = useCallback((e) => {
    if (!enableDrag) return;
    setIsDragging(true);
    onDragStart?.(e);
  }, [enableDrag, onDragStart]);

  const handleDragEnd = useCallback((e) => {
    if (!enableDrag) return;
    setIsDragging(false);
    onDragEnd?.(e);
  }, [enableDrag, onDragEnd]);

  // Add to cart handler
  const handleAddToCart = useCallback(async () => {
    if (typeof onAddToCart !== 'function') return;
    
    try {
      await onAddToCart();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Add to cart failed:', error);
    }
  }, [onAddToCart]);

  return (
    <article
      className={`w-full max-w-full overflow-hidden duration-100 ease-in-out ${
        enableDrag ? 'cursor-grab' : 'cursor-default'
      } ${isDragging ? 'cursor-grabbing scale-95' : ''}`}
      style={{
        background: mergedTheme['--card-bg'],
        borderRadius: mergedTheme['--card-radius'],
        transform: 'scale(1)',
      }}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
    >
      <figure className="relative aspect-[3/2] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={hasImageError ? fallbackImage : imgSrc}
          alt={imgAlt}
          loading="lazy"
          decoding="async"
          onError={() => setHasImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </figure>

      <figcaption className="p-6" style={{ color: mergedTheme['--text-secondary'] }}>
        <header className="mb-2 flex items-center justify-between text-xl font-bold">
          <h1 style={{ color: mergedTheme['--text-primary'] }}>{title}</h1>
          <data
            value={price}
            style={{ color: mergedTheme['--price-color'] }}
          >
            {formatPrice()}
          </data>
        </header>

        <div className="mb-4 flex items-center space-x-2">
          <p>{heatLabel}:</p>
          <div
            role="meter"
            aria-valuenow={heatLevel}
            aria-valuemin={0}
            aria-valuemax={maxHeatLevel}
            className="flex space-x-1"
          >
            {heatLevels.map(({ active, key }) => (
              <span
                key={key}
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor: active
                    ? mergedTheme['--heat-active']
                    : mergedTheme['--heat-inactive']
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <p className="mb-6">{children}</p>

        <button
          className={`w-full rounded-lg py-2 text-white transition-all ${
            isAddingToCart ? 'opacity-75 cursor-not-allowed' : ''
          }`}
          style={{
            background: showSuccess
              ? mergedTheme['--success-bg']
              : `linear-gradient(to right, ${mergedTheme['--button-from']}, ${mergedTheme['--button-to']})`,
          }}
          onClick={handleAddToCart}
          disabled={isAddingToCart || showSuccess}
          aria-live="polite"
        >
          {isAddingToCart ? (
            <div className="flex items-center justify-center">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            </div>
          ) : showSuccess ? (
            <div className="flex items-center justify-center">
              <i className="ri-checkbox-circle-fill mr-2" aria-hidden="true" />
              Added!
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <i className="ri-shopping-cart-2-line mr-2" aria-hidden="true" />
              Add to Cart
            </div>
          )}
        </button>
      </figcaption>
    </article>
  );
};

SlideCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  heatLevel: PropTypes.number,
  maxHeatLevel: PropTypes.number,
  isAddingToCart: PropTypes.bool,
  onAddToCart: PropTypes.func,
  currency: PropTypes.string,
  locale: PropTypes.string,
  heatLabel: PropTypes.string,
  theme: PropTypes.shape({
    '--card-bg': PropTypes.string,
    '--text-primary': PropTypes.string,
    '--text-secondary': PropTypes.string,
    '--price-color': PropTypes.string,
    '--heat-active': PropTypes.string,
    '--heat-inactive': PropTypes.string,
    '--button-from': PropTypes.string,
    '--button-to': PropTypes.string,
    '--success-bg': PropTypes.string,
    '--hover-scale': PropTypes.string,
    '--card-radius': PropTypes.string,
  }),
  enableDrag: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
};

SlideCard.defaultProps = {
  heatLevel: 0,
  maxHeatLevel: 5,
  isAddingToCart: false,
  currency: '₹',
  locale: 'en-IN',
  heatLabel: 'Heat Level',
  theme: {},
  enableDrag: false,
};

export default React.memo(SlideCard);