import ButtonDefault from "@/components/buttons/ButtonDefault";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import { CreditCardOutlined } from "@ant-design/icons";

type Props = {};

const BannerProduct = (props: Props) => {
  return (
    <div className='h-[454px] w-full md:p-0 p-4 bg-banner md:bg-banner-tablet bg-no-repeat bg-cover bg-center md:rounded-xl'>
      <div className='flex flex-col gap-4 justify-between md:justify-center md:px-12 lg:px-24 rounded-xl md:w-1/2 pt-6 md:pt-0 px-4 h-full bg-[linear-gradient(180deg,_#FFF_15.27%,_rgba(255,_255,_255,_0.00)_47.83%)] md:bg-[linear-gradient(180deg,_#E0E0E0_0%,_#CDD2D8_100%)] md:[clip-path:polygon(97%_0,_93%_37%,_100%_86%,_96%_100%,_45%_100%,_0_100%,_0_0)]'>
        <div className='flex flex-col gap-2'>
          <p className='text-[22px] md:text-[32px] text-black font-bold'>Thẻ</p>
          <p className='text-sm md:text-base leading-[22px] text-black'>
            Khám phá sản phẩm thẻ yêu thích hoặc lựa chọn nhanh nhờ tính năng so sánh và gợi ý dựa trên nhu cầu của bạn
          </p>
        </div>
        <div className='flex gap-4 max-h-[42px] z-20'>
          <ButtonPrimary
            buttonProps={{
              children: "Đăng ký",
              icon: <CreditCardOutlined />,
              style: { width: "50%", fontWeight: 500, height: "100%" },
            }}
          />
          <ButtonDefault
            title='Ưu đãi'
            preffix={<CreditCardOutlined className='text-red' />}
            active
            wapperClass='flex-1 font-medium text-base min-h-[42px]'
          />
        </div>
      </div>
    </div>
  );
};

export default BannerProduct;
