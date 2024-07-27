import iconCheckmark from '../../assets/icon-thank-you.svg'
import { useSelector } from 'react-redux';

function SuccessScreen() {
    const activeStep = useSelector((state) => state.activeStep);
  return (
    <div className={`${activeStep !== 6 ? 'opacity-0 z-[-1] absolute' : 'opacity-1 z-10 lg:absolute'} min-w-full left-0 top-[29%] lg:px-[100px] lg:py-0 py-[70px] duration-300 transition-all ease-in delay-150 flex flex-col text-center justify-center items-center gap-[4px] lg:gap-[12px]`}>
      <img
        className="lg:pb-[18px] pb-[14px] lg:w-auto w-[60px]"
        src={iconCheckmark}
        alt="icon-checkmark"
      />
      <h2 className="text-[28px] lg:text-[32px]  font-bold text-marine-blue">Hvala Vam!</h2>
      <p className="text-cool-gray text-[16px] lg:text-[18px]">
        Vaš termin je uspješno registrovan, u slučaju otkazivanja biće Vam javljeno.
      </p>
    </div>
  );
}

export default SuccessScreen;
