import Header from './Header';

interface PageProps {
    children: React.ReactNode;
}

const Page = ({ children }: PageProps) => (
    <div className="page">
        <Header />
        {children}
    </div>
);

export default Page;
