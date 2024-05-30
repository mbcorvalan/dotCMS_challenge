import React, { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { useMainState } from '../hooks/useMainState';
import NavBar from '../components/NavBar';
import Loading from '../components/Loading';
import ErrorMsg from '../components/ErrorMsg';

const NotFound = () => {
    const { mainClass, isOpen } = useMainState();
    const selectNewsStatus = useSelector((state: RootState) => state.selectedNews.isLoading);

    return (
        <main className={mainClass}>
            <NavBar />
            {selectNewsStatus && <div className={`main__content ${isOpen ? 'hidden' : ''}`}> <Loading status={selectNewsStatus} color="#c336e5" container="li" /></div>}
            {!selectNewsStatus && <div className={`main__content ${isOpen ? 'hidden' : ''}`}>{<ErrorMsg msg="Not news found" container="div" />}</div>}
        </main>
    );
};

export default NotFound;

