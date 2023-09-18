export interface News {
  _id: string;
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
  category: string | null;
}

export interface NewsResponse {
  status: number;
  message?: string;
  articles: News[];
  meta: {
    totalDocuments: number;
    documentsPerPage: number;
    currentPage: number;
    totalPages: number;
  };
}
