import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import './update.css'
import { Style } from '@mui/icons-material';

function Update() {
  return (
    <div id='main'>
      <table>
        <tr>
          <th>Room No</th>
          <th>Init Reading</th>
          <th>Current Reading</th>
          <th>Previos Balance</th>
          <th>Bought Units</th>
          <th>Balance Units</th>
          <th>Actions</th>


        </tr>
        <tr>
            <td>1</td>
            <td>1267.1</td>
            <td>1373.3</td>
            <td>10</td>
            <td>17</td>
            <td>5</td>
            <td><RemoveRedEyeIcon sx={{fontSize:'16px',color:'blue',cursor:'pointer'}}/></td>
        </tr>
        <tr>
            <td>2</td>
            <td>4267.1</td>
            <td>5373.3</td>
            <td>30</td>
            <td>27</td>
            <td >53</td>
            <td><RemoveRedEyeIcon sx={{fontSize:'16px',color:'blue',cursor:'pointer'}}/></td>
        </tr>
        <tr>
            <td>3</td>
            <td>4267.1</td>
            <td>5373.3</td>
            <td>30</td>
            <td>27</td>
            <td style={{background:'red'}}>-5</td>
            <td><RemoveRedEyeIcon sx={{fontSize:'16px',color:'blue',cursor:'pointer'}}/></td>
        </tr>
      </table>
    </div>
  );
}

export default Update;
