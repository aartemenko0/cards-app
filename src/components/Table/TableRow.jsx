import Button from "../Button/Button";

const TableRow = ({ word }) => {
  return (
    <tr>
      <td>{word.id}</td>
      <td>{word.english}</td>
      <td>{word.transcription}</td>
      <td>{word.russian}</td>
      <td>
        <Button text="Edit" />
        <Button text="Delete" />
      </td>
    </tr>
  );
};

export default TableRow;
