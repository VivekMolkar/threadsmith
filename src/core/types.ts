export type Tweet = {
  index: number; // 1-based
  content: string;
  length: number;
};

export type Thread = {
  tweets: Tweet[];
  total: number;
};
