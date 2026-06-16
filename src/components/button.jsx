// src/components/Button.jsx
 
// 1. Import React (optional in React 17+ but good habit)
 
// 2. Define the component — a function that accepts 'props'
//    Props = data passed in from the parent
function Button({ label, onClick, variant = 'primary' }) {
 
  // Base classes always applied
  const base = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer';
 
  // Variant-specific classes
  const variants = {
    primary:   'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger:    'bg-red-600 text-white hover:bg-red-700',
  };
 
  // 3. Return JSX
  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
 
// 4. Export — required so other files can import it
export default Button;