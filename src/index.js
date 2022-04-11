import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './components/Router';
import './css/style.css';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(<Router />);
