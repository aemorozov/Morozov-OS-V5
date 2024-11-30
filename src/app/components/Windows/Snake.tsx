export const Snake = () => {
  return (
    <div className="snake-game">
      <div className="start_game" id="start_game">
        <h2>Snake_1.5</h2>
        <p>Select a level:</p>
        <p>
          <a href="##" className="level" id="10">
            1
          </a>
          <a href="##" className="level" id="15">
            2
          </a>
          <a href="##" className="level" id="20">
            3
          </a>
        </p>
        <a href="##" className="startButton" id="startButton">
          Start
        </a>
      </div>
      <div className="container_snake" id="board"></div>
      <div className="game_over" id="game_over">
        <p>You've run into a tail</p>
        <p>
          Score: <span className="score" id="score"></span>
        </p>
        <p>
          <a href="##" className="button" id="restart_button">
            Start over
          </a>
        </p>
      </div>
      <script src="./Snake/snake.js"></script>
    </div>
  );
};
