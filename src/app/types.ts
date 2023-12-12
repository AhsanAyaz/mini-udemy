export type Course = {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  category: string;
};

export type Lecture = {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  description?: string;
};
