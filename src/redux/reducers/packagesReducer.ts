interface PackageState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: PackageState, action: any) => {
  switch (action.type) {
    case 'search_packages':
      return { loading: true, error: null, data: [] };
    case 'search_packages_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_packages_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
