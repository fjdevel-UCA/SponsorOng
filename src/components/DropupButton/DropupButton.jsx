CustomDropdown.defaultProps = {
    caret: true,
    hoverColor: "primary"
  };
  
  CustomDropdown.propTypes = {
    hoverColor: PropTypes.oneOf(["primary", "black"]),
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.func,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    left: PropTypes.bool,
    noLiPadding: PropTypes.bool,
  };