import { SortOrder } from 'mongoose';

type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: SortOrder;
};

const calculatePagination = (Options: IOptions): IOptionsResult => {
  const page = Number(Options.page || 1);
  const limit = Number(Options.limit || 10);
  const skip = (page - 1) * limit;

  const sortBy = Options.sortBy || 'createdAt';
  const sortOrder = Options.sortOrder || 'desc';

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export const paginationHelper = { calculatePagination };
