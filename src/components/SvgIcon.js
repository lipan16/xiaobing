import React from 'react'

const importAll = (requireContext) => requireContext.keys().forEach(requireContext)

try{
    importAll(require.context('@/assets/svg', false, /\.svg$/))
}catch(error){
    console.log(error)
}

const SvgIcon = (props) => {
    return (
        <svg width={props.width || 10}
             height={props.height || 18}
             fill={props.fill}
             onClick={props.onClick}
             className={props.className}
             style={props.style}>
            <use xlinkHref={'#' + props.name}/>
        </svg>
    )
}
export default SvgIcon
