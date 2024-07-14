const Theme = {
  base: 'font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none',
  type: {
    outline: {
      color: {
        info: 'text-slate-100 bg-transparent border-2 border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 hover:text-slate-50',
      },
    },
    full: {
      color: {
        info: 'text-white border-2 border-cyan-400 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 ',
        warning:
          'text-white border-2 border-red-400 bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700',
      },
    },
  },
  size: {
    xs: 'px-3 py-2 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base',
  },
};

export default Theme;
