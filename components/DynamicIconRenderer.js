import * as FaIcons from 'react-icons/fa'; // Font Awesome Icons
import * as SIcons from 'react-icons/si'; // Simple Icons
import * as FIcons from 'react-icons/fi'; // Feather Icons
import * as HIcons from 'react-icons/hi'; // Hero Icons
import * as MdIcons from 'react-icons/md'; // Material Design Icons

const renderer = ({ name, provider }) => {
  if (provider == 'fa') return FaIcons[name]; // Font Awesome Icons
  if (provider == 'si') return SIcons[name]; // Simple Icons
  if (provider == 'fi') return FIcons[name]; // Feather Icons
  if (provider == 'hi') return HIcons[name]; // Hero Icons
  if (provider == 'mdi') return MdIcons[name]; // Material Design Icons
};

const DynamicIconRenderer = ({ icon, className }) => {
  let Icon = renderer(icon);
  return <Icon className={className} />;
};

export default DynamicIconRenderer;
