import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const RSwal = withReactContent(Swal);
function Information(props) {
  return (
    <div>
      {/* <Icons className="primary-color" type="warning" /> */}
      <span className>{props.msg}</span>
    </div>
  );
}

export default function swalAlert(msg, cancelButtonFlag = false) {
  return RSwal.fire({
    width: 400,
    html: <Information msg={'查询出错'} />,
    animation: false,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    reverseButtons: true,
    showCancelButton: cancelButtonFlag,
    customContainerClass: 'swal-absolute',
    target: document.querySelector('body'),
  });
}
