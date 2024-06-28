// import {Container,ButtonGroup,Button} from '@mui/material';
// import './Account.scss';
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
// import Preloader from '../../components/Preloader/Preloader';
// import {useSelector} from 'react-redux';
// import {selectorAccountIsLoading} from "../../selectors"
//
// const MyAccount: React.FC = () => {
//
//     const loading = useSelector(selectorAccountIsLoading);
//
//     return (<>
//         <Container className="account" maxWidth="xl">
//             <BreadCrumbs linksArray={[{link: '/account', text: 'MyAccount'}]}/>
//             <div className="account__wrapper">
//                 <h2 className="account__wrapper-title">My account</h2>
//                 <ButtonGroup
//                     disableElevation
//                     variant="contained"
//                     aria-label="Disabled button group"
//                 >
//                     <Button>My events</Button>
//                     <Button>Participation</Button>
//                 </ButtonGroup>
//                 {loading && <Preloader open/>}
//
//             </div>
//         </Container>
//
//     </>)
// }
// export default MyAccount;
