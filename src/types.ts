
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
