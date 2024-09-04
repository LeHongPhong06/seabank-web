import icon from "@/assets/images/icons/icon-sucessfully-notification.svg";
import { notification } from "antd";
import Image from "next/image";

export const notificationSuccessForm = () => {
  notification.open({
    message: (
      <div className='flex flex-col gap-1'>
        <p className='text-transparent bg-gradient-primary bg-clip-text text-lg font-semibold leading-[22px]'>
          Đăng ký thành công
        </p>
        <p className='text-sm text-black font-medium leading-[18px]'>
          SeABank sẽ liên hệ với Quý khách trong thời gian sớm nhất
        </p>
      </div>
    ),
    icon: <Image src={icon} alt='icon-successfully' height={48} width={48} />,
    placement: "top",
    style: { paddingBlock: 16, width: 590 },
    className: "notification-form-avides",
  });
};
