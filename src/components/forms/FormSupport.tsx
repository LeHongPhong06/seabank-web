"use client";
import file from "@/assets/images/icons/file.svg";
import { colors } from "@/constants/colors";
import { ProductContext } from "@/context/product";
import { CloseOutlined, DeleteOutlined, FileOutlined } from "@ant-design/icons";
import { Checkbox, ConfigProvider, Form, Input, message, Select } from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import Image from "next/image";
import React, { CSSProperties, useContext, useRef, useState } from "react";
import ButtonComponent from "../buttons/ButtonComponent";
import ButtonPrimary from "../buttons/ButtonPrimary";

const FormSupport = () => {
  const [formRef] = Form.useForm();
  const [optionConctacts, setOptionContacts] = useState<Array<string>>([]);
  const [file, setFile] = useState<File>();
  const productContext = useContext(ProductContext);
  const { dispatch } = productContext;
  const optionCheckBox: CheckboxGroupProps["options"] = [
    {
      value: "phone",
      label: "Nhận phản hồi qua điện thoại",
    },
    {
      value: "email",
      label: "Nhận phản hồi qua email",
    },
  ];
  const onChangeChooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.currentTarget.files;
    const file = fileList?.[0];
    if (file) {
      const isLt3M = file.size / 1024 / 1024 < 0.3;
      if (!isLt3M) {
        message.error(`Dung lượng file không được vượt quá 3MB`);
        return false;
      }
      setFile(file);
    }
  };
  const onFinish = (values: any) => {};
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            controlHeight: 48,
            colorBorder: colors.GRAY_BTN,
            colorTextPlaceholder: colors.GRAY_BTN,
            activeBorderColor: colors.RED,
            hoverBorderColor: colors.RED,
            borderRadius: 12,
            paddingInline: 16,
            fontSize: 16,
            activeShadow: "0 0 0 2px rgba(221, 27, 28, 0.1)",
          },
          Select: {
            paddingSM: 16,
            borderRadius: 12,
            fontSize: 16,
            controlHeight: 48,
            colorPrimary: colors.RED,
            colorBorder: colors.GRAY_BTN,
            colorTextPlaceholder: colors.GRAY_BTN,
            paddingContentHorizontal: 16,
            colorPrimaryHover: colors.RED,
            colorPrimaryBorder: colors.RED,
            controlOutline: colors.PRIMARY_OUTLINE,
          },
          Checkbox: {
            controlInteractiveSize: 18,
            colorPrimaryHover: colors.RED,
            colorPrimaryBorderHover: colors.GRAY_BTN,
            colorPrimary: "rgba(221, 26, 28, 0.5)",
          },
        },
      }}
    >
      <div className='relative px-4 py-6 sm:px-16 sm:py-12'>
        <div
          className='absolute left-0 right-0 mx-auto size-14 -translate-y-24 sm:-translate-y-32 bg-[rgba(0,_0,_0,_0.65)] flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-black'
          onClick={() => dispatch?.({ type: "changeModalSupport", payload: { modalCustomerSupport: false } })}
        >
          <CloseOutlined className='text-white text-xl' />
        </div>
        <div className='mb-4 flex flex-col gap-2 sm:items-center'>
          <h3 className='capitalize leading-7 bg-gradient-primary text-transparent bg-clip-text font-bold text-xl md:text-2xl'>
            Hỗ trợ chung
          </h3>
          <p className='leading-[18px] font-medium text-sm md:text-base sm:text-center'>
            <span className='text-black'>Cổng thông tin chăm sóc Khách hàng đầu tiên trên thị trường</span>
            <span className='text-transparent bg-gradient-primary bg-clip-text ml-1 font-semibold capitalize'>
              Ngân Hàng
            </span>
          </p>
        </div>
        <Form layout='vertical' onFinish={onFinish} form={formRef}>
          <div className='flex flex-col md:flex-row md:gap-4'>
            <div className='flex-1'>
              <TitleGroupField title={"1. Chọn sản phẩm / Dịch vụ cần hỗ trợ"} />
              <Form.Item label={<LabelInput title='Sản phẩm' />}>
                <Select placeholder={"Chọn sản phẩm"} />
              </Form.Item>
              <Form.Item label={<LabelInput title='Dịch vụ cần hỗ trợ' />}>
                <Select placeholder={"Chọn dịch vụ"} />
              </Form.Item>
              <TitleGroupField title={"2. Nhập thông tin khách hàng"} />
              <Form.Item label={<LabelInput title='Họ và tên' />} name={"fullName"}>
                <Input placeholder={"Nhập họ và tên"} />
              </Form.Item>
              <Form.Item label={<LabelInput title='Số điện thoại' />} name={"phone"}>
                <Input placeholder={"Nhập số điện thoại"} />
              </Form.Item>
              <Form.Item label={<LabelInput title='Email' />} name={"email"}>
                <Input placeholder={"Nhập email"} />
              </Form.Item>
            </div>
            <div className='flex-1'>
              <TitleGroupField
                title={"3. Nội dung cần hỗ trợ"}
                subTitle='SeABank cam kết bảo mật toàn bộ các thông tin cá nhân của Khách hàng đã đăng ký với ngân hàng. Tuy nhiên, để tránh việc thông tin có thể bị khai thác trên đường truyền tin. Quý khách vui lòng KHÔNG ĐIỀN những thông tin cá nhân quan trọng cần bảo mật (mã CVV, tên truy cập, mật khẩu, mã PIN, mã OTP...) vào mục nội dung cần hỗ trợ.'
              />
              <Form.Item label={<LabelInput title='Nội dung' />} name={"content"}>
                <Input.TextArea placeholder={"Nhập nội dung"} />
              </Form.Item>
              <Form.Item>
                <FormItemChooseFile onChange={onChangeChooseFile} value={file} onDelele={() => setFile(undefined)} />
              </Form.Item>
              <TitleGroupField title={"4. Lựa chọn phương thức phản hồi từ ngân hàng"} />
              <Checkbox.Group
                options={optionCheckBox}
                style={{ fontWeight: 500, marginBottom: 24, gap: 6 }}
                value={optionConctacts}
                onChange={(values) => setOptionContacts(values)}
              />
              <div className='flex gap-2 w-full md:w-[250px] h-12'>
                <ButtonComponent title='Làm lại' styles={{ width: "100%" }} onClick={() => formRef.resetFields()} />
                <ButtonPrimary
                  buttonProps={{
                    disabled: optionConctacts.length < 1,
                    htmlType: "submit",
                    children: "Gửi yêu cầu",
                    style: { width: "100%" },
                  }}
                />
              </div>
            </div>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
};

const FormItemChooseFile = ({
  value,
  onChange,
  onDelele,
}: {
  value?: File;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelele: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formatFileSize = () => {
    if (value) {
      const kilobytes = value.size / 1024;
      const megabytes = kilobytes / 1024;
      if (megabytes >= 1) {
        return `${megabytes.toFixed(2)} MB`;
      } else {
        return `${kilobytes.toFixed(2)} KB`;
      }
    }
  };
  return (
    <React.Fragment>
      <div className='flex flex-col gap-3'>
        <div className='flex gap-4'>
          <div className='relative size-4 mt-1'>
            <Image src={file} alt='icon-file' sizes='100%' fill className='object-contain' />
          </div>
          <p className='text-sm font-medium'>
            <span className='mr-1 underline text-red hover:cursor-pointer' onClick={() => inputRef.current?.click()}>
              Đính kèm file
            </span>
            <span>
              (Tài liệu đính kèm là file *.jpg, *.jpeg, *.png, *.docx, *.pdf, *.xlsx có tổng dung lượng tối đa 3MB)
            </span>
          </p>
        </div>
        {value && (
          <div className='w-full rounded-xl p-[1px] bg-gradient-primary'>
            <div className='bg-white rounded-[11px] px-4 py-1 w-full h-full flex gap-3'>
              <FileOutlined className='text-xl' />
              <div className='flex-1'>
                <p className='text-black font-medium'>{value.name}</p>
                <p className='text-black font-medium'>{formatFileSize()}</p>
              </div>
              <DeleteOutlined className='text-xl text-primary' onClick={onDelele} />
            </div>
          </div>
        )}
      </div>
      <input
        onChange={onChange}
        type='file'
        style={{ display: "none" }}
        multiple={false}
        ref={inputRef}
        accept='.jpg, .jpeg, .png, .docx, .xlsx, .pdf'
      />
    </React.Fragment>
  );
};

const LabelInput = ({ title, styles }: { title: string; styles?: CSSProperties }) => {
  return (
    <span className='text-base font-medium text-black leading-normal' style={styles}>
      {title}
    </span>
  );
};

const TitleGroupField = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className='mb-2 md:mb-3'>
      <p className='text-base bg-gradient-primary bg-clip-text text-transparent font-semibold mb-2 pl-1'>{title}</p>
      <p className='text-sm font-medium leading-[22px]'>{subTitle}</p>
    </div>
  );
};

export default FormSupport;
