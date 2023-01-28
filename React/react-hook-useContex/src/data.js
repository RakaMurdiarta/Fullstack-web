import React from 'react';
import {
  FaHome,
  FaNpm,
  FaPhp,
  FaNode,
  FaFigma,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/npms',
    text: 'NPM',
    icon: <FaNpm />,
  },
  {
    id: 3,
    url: '/php',
    text: 'PHP',
    icon: <FaPhp />,
  },
  {
    id: 4,
    url: '/nodes',
    text: 'Node JS',
    icon: <FaNode />,
  },
  {
    id: 5,
    url: '/figmas',
    text: 'Figma',
    icon: <FaFigma />,
  },
];
