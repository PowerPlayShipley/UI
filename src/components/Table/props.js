import PropTypes from 'prop-types'

const Col = {
  accessor: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
  id: PropTypes.string,
  Header: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  Footer: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element]),
  Cell: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  width: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number
}

export const Column = PropTypes.exact(Col)

export const Columns = PropTypes.arrayOf(PropTypes.exact({
  ...Col,
  accessor: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]).isRequired,
  columns: PropTypes.arrayOf(Column)
}))
