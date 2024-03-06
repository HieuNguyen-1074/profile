import AnimateCusor from '@/components/AnimateCusor';
import Footer from '@/components/Footer';
import Introduce from '@/components/Introduce';

export default function Home() {
  return (
    <>
      <Introduce />
      <Footer isInBottomWeb={true} />
    </>
  );
}
