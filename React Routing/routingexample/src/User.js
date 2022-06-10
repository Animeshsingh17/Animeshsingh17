import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function User() {
  const params = useParams();
  const { name } = params;
  console.warn(name);

  return (
    <div>
      <h1>This is {name} Page</h1>
      <ul>
        <li>
          <Link to="/user/animesh">Animesh</Link>
        </li>
        <li>
          <Link to="/user/shyam">Shayam</Link>
        </li>
      </ul>
    </div>
  );
}
export default User;
