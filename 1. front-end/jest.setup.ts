import '@testing-library/jest-dom';
// import { PROD } from '@/consts/enviroment';

jest.mock('./src/consts/environment', () => ({
    PROD: 'development',
}));
