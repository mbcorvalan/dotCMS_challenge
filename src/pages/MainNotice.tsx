import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { useMainState } from '../hooks/useMainState';
import NavBar from '../components/NavBar';

const MainNotice: React.FC = () => {
    const { mainClass, isOpen } = useMainState();
    const selectedNews = useSelector((state: RootState) => state.selectedNews.data);

    return (
        <main className={mainClass}>
            <NavBar />
            <h1 className={`main__content ${isOpen ? 'hidden' : ''}`} >{selectedNews[0] && selectedNews[0].identifier}</h1>
        </main>
    );
};

export default MainNotice;

