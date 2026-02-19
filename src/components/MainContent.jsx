import StatCard from "./StatCard";
import ProductPage from "./ProductPage";
import OrderPage from "./OrderPage";
import Books from "./Books";

function MainContent({ activePage }) {
        const page = activePage.trim();

        if (page === "products") {
                return (
                        <main className="main">
                                <ProductPage />
                        </main>
                )
        }

        if (page === "Orders") {
                return (
                        <main className="main">
                                <OrderPage />
                        </main>
                )
        }

        if (page === "Books") {
                return (
                        <main className="main">
                                <Books />
                        </main>
                )
        }

        return (
                <div className="main-content">
                        <h1>Dashboard K-Shelves </h1>
                        <div className="cards-grid">
                                <StatCard title="Total Products" value={1234} />
                                <StatCard title="Total Users" value={1234} />
                                <StatCard title="Total Revenue" value={56789} />
                        </div>
                </div>
        );
}

export default MainContent;