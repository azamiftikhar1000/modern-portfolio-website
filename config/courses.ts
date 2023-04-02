export type CourseContent = {
  name: string;
  slug?: string;
  description?: string;
  content?: CourseContent[];
};

export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
  content: CourseContent[];
}

export const courseSlugMap = {
 
};

export const courses: Course[] = [
  
];
