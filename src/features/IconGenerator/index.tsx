import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = ({icon}: {icon: IconDefinition}) => {
  return (
    <FontAwesomeIcon icon={icon} />
  )
}
