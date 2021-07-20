const timeDecReg = /([0-9.]+)(s|m|h)?/
const timeStdReg = /((\d\d):)?((\d\d):(\d\d))/
const MINUTES = 60
const HOURS = 60 * 60

function getTime( h, m, s ){
  h = parseFloat( h || 0 )
  m = parseFloat( m || 0 )
  s = parseFloat( s || 0 )
  return Math.round( (h * HOURS + m * MINUTES + s) * 1000 ) // integer
}

// returns parsed time in ms
export function timeParser( strOrNumber ){
  if ( typeof strOrNumber !== 'string' ){
    return strOrNumber
  }

  let parsed = strOrNumber.match(timeStdReg)

  if ( parsed ){
    return getTime( parsed[2], parsed[4], parsed[5] )
  }

  parsed = strOrNumber.match(timeDecReg)

  if ( parsed ){
    const unit = ('' + parsed[2]).toLowerCase()

    if ( !parsed[1] || unit === 's' ){
      return getTime( 0, 0, parsed[1] )
    }

    if ( unit === 'm' ){
      return getTime( 0, parsed[1], 0 )
    }

    if ( unit === 'h' ){
      return getTime( parsed[1], 0, 0 )
    }
  }

  return 0
}
