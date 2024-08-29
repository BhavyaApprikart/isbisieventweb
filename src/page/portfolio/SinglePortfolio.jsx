import BreadCrumb from "../../components/common/Breadcrumb";
import Projects from "../../components/home-one/projects";
import PortfolioDetails from "../../components/portfolio/single/PortfolioDetails";

function SinglePortfolio() {
	return (
		<>
			<BreadCrumb title="Isibisi" />
			<PortfolioDetails />
			<Projects />
		</>
	);
}

export default SinglePortfolio;