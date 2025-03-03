type NotificationType = 'sms' | 'email' | 'push';

type INotification = {
  [key in NotificationType]: boolean;
};

type NumOption = { num: number; label: string };

export type { NotificationType, INotification, NumOption };
