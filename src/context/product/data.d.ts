export interface PayloadAction {
  type: "changeModalBusiness" | "changeModalIndividual" | "changeModalSupport";
  payload?: boolean;
}

export interface InitialStateProduct {
  modalBusinessRegister: boolean;
  modalIndividualRegister: boolean;
  modalCustomerSupport: boolean;
}
