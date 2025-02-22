import { Helmet } from 'react-helmet-async';
// containers
import Header from 'containers/header';
import Footer from 'containers/Footer';
// components
import MainPageLayout from 'components/layout/MainPageLayout';
import BackBtn from 'components/common/BackBtn';

const ProductDetailPage = ({ match }) => {
  const productId = match.params['id'];

  return (
    <>
      <Helmet>
        <title>페칭 - 1등 명품 쇼핑 서비스</title>
      </Helmet>

      <MainPageLayout>
        <Header isShowCategory={true} />

        <h1>상품 ID: {productId}</h1>
        <BackBtn />
        <Footer />
      </MainPageLayout>
    </>
  );
};

export default ProductDetailPage;
