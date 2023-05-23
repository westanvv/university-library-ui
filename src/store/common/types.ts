export type Notification = {
  status: string;
  message: string;
};

export interface CommonReducer {
  notification?: Notification;
  showSidebar: boolean;
}
