import { createContext, useContext, useState, ReactNode } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  size: string;
  color: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: 'Premium Cotton Shirt',
      price: 2499,
      originalPrice: 3499,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400',
      size: 'M',
      color: 'White'
    },
    {
      id: 2,
      name: 'Slim Fit Jeans',
      price: 3999,
      originalPrice: 4999,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
      size: 'L',
      color: 'Blue'
    },
    {
      id: 3,
      name: 'Casual T-Shirt',
      price: 1299,
      originalPrice: 1799,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      size: 'M',
      color: 'Black'
    }
  ]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlistItems(prev => {
      const exists = prev.find(wishlistItem => wishlistItem.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id: number) => {
    return wishlistItems.some(item => item.id === id);
  };

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      wishlistCount
    }}>
      {children}
    </WishlistContext.Provider>
  );
};