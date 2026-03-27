import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/apiPaths';
import { Edit, Trash2 } from 'lucide-react';

const BookCard = ({ book, onDelete }) => {
  const navigate = useNavigate();

  const coverImageUrl = book.coverImage
    ? `${BASE_URL}/backend${book.coverImage}`.replace(/\\/g, "/")
    : " ";

  return (
    <div
      className='group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:translate-y-1 cursor-pointer'
      onClick={() => navigate(`/view-book/${book._id}`)}
    >
      <div className='relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
        <img
          src={coverImageUrl}
          alt={book.title}
          className='w-full aspect-[16/25] object-cover transition-transform duration-500 group-hover:scale-105'
        />

        <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2'>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/editor/${book._id}`);
            }}
            className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg'
          >
            <Edit className='w-4 h-4 text-gray-700' />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(book._id);
            }}
            className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-red-50'
          >
            <Trash2 className='w-4 h-4 text-red-500' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
