import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const vedioRelativeAction=(data)=>fetchData(types.vedio.VEDIO_RELATIVE,path.vedio.vedioRelative,data,"data")