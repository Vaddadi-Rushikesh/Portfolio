// Button.jsx

// node modules
import PropTypes from 'prop-types';

// Primary button
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = '',
    download // ✅ New download prop
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                download={download} // ✅ Applies download attribute if true
                className={"btn btn-primary " + classes}
            >
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </a>
        );
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </button>
        );
    }
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]) // ✅ Added prop type
};

// Outline button
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ''
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </a>
        );
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon ? (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                ) : null}
            </button>
        );
    }
};

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
};

export {
    ButtonPrimary,
    ButtonOutline
};
