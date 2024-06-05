import { Container } from '@mui/material';
import './Account.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Preloader from '../../components/Preloader/Preloader';
import {  useSelector } from 'react-redux';
import {selectorAccountIsLoading} from "../../selectors"

const MyAccaunt: React.FC = () => {
   
    const loading = useSelector(selectorAccountIsLoading);

    return (<>
<Container className="account-container" maxWidth="lg">
                <BreadCrumbs linksArray={[{ link: '/account', text: 'MyAccount' }]} />
                <div className="account-container__wrapper">
                    <h2 className="account-container__wrapper-title">My account</h2>

                    {loading && <Preloader open />}
   
                </div>
            </Container>

    </>)}
    export default MyAccaunt;