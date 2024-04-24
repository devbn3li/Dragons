import TopHeader from '../hazem-components/top-header';
import Aside from '../hazem-components/Aside';
import ContentMainContent from '../hazem-components/ContentMainContent';
import ContentNav from '../hazem-components/ContentNav';
import ContentSubHead from '../hazem-components/ContentSubHead';
import ZenteroHeader from '../hazem-components/ZenteroHeader';



function SecondPage() {
    return (
        <div className=' bg-black'>
            <TopHeader />
            <div className="container mx-auto bg-SectionAsideColor2 rounded-3xl w-full">
                <ZenteroHeader />
                <div className=" flex sm:flex-col md:flex-row gap-4 mx-auto  ">
                    <Aside />
                    <div className='content flex-1  '>
                        <div className="all bg-SectionColor p-3 rounded-lg">
                            <ContentSubHead />
                            <ContentNav />
                        </div>
                        <ContentMainContent />
                        <div />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SecondPage;