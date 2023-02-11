import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Pilih Jenis',
    text:
      'Pilih jenis barang yang ingin kamu customs.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Pilih Warna dan Ukuran',
    text:
      'Temukan lebih dari 100 macam warna dan 5 ukuran.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'COD',
    text:
      'Kirim dengan kurir favorit kamu dan bayar COD.',
  },
]

export const products_url = 'https://63cdf885d2e8c29a9bced636.mockapi.io/api/v1/products'
//'https://course-api.com/react-store-products'

export const single_product_url = 'https://63cdf885d2e8c29a9bced636.mockapi.io/api/v1/products/'
//`https://course-api.com/react-store-single-product?id=`
