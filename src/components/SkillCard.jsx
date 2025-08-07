import PropTypes from "prop-types";

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group' + classes}>
        <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-10 h-10 sm:w-12 sm:h-12 p-2 group-hover:bg-zinc-900 transition-colors">
            <img
                src={imgSrc}
                height={32}
                width={32}
                alt={label}
                className="w-full h-full object-contain"
            />
        </figure>

        <div>
            <h3 className="text-sm sm:text-base font-medium">{label}</h3>

            <p className="text-zinc-400 text-xs sm:text-sm">
                {desc}
            </p>
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc : PropTypes.string.isRequired,
    classes : PropTypes.string
}

export default SkillCard;