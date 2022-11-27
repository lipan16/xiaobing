import React from 'react'

const importAll = (requireContext) => requireContext.keys().forEach(requireContext)

try{
    console.log('import all')
    importAll(require.context('@/assets/svg', false, /\.svg$/))
}catch(error){
    console.error('import all svg ERROR', error)
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
