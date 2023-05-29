import { Accordion, Button, Form, FormCheck } from "react-bootstrap";

function FilterArea() {
  
  let species = [{speciesName: "Human" , speciesId: 7 }, {speciesName: "Humanoid" , speciesId: 8 }, {speciesName: "Alien" , speciesId: 9 }, {speciesName: "PoopyButtHole" , speciesId: 10 }, {speciesName: "Mythological" , speciesId: 11 }, {speciesName: "Unknown" , speciesId: 12 }, {speciesName: "Animal" , speciesId: 13 }, {speciesName: "Disease" , speciesId: 14 }, {speciesName: "Robot" , speciesId: 15 }, {speciesName: "Cronenberg" , speciesId: 17 }]

  let gender = [{genderId : 0, genderName: "Male"}, {genderId : 1, genderName: "Female"}, {genderId : 2, genderName: "Genderless"}, {genderId : 3, genderName: "Unknown"}]
  
  let status = [{statusId: 4, statusName: "Alive"} ,{statusId: 5, statusName: "Dead"}, {statusId: 6, statusName: "Unknown"}]
  
  return (
    <div className="w-fit h-fit flex">
      <Accordion defaultActiveKey={"1"} alwaysOpen>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Species</Accordion.Header>
          <Accordion.Body className="max-w-min">
            <Form>
            {species.map((species) => (<div>
              <FormCheck type="checkbox" key={species.speciesId} label={species.speciesName}/>
            </div>))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Gender</Accordion.Header>
          <Accordion.Body>
            <Form>
            {gender.map((gender) => (<div>
              <FormCheck type="checkbox" key={gender.genderId} label={gender.genderName}/>
            </div>))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Status</Accordion.Header>
          <Accordion.Body className="max-w-min">
            <Form>{status.map((status) => (<div>
              <FormCheck key={status.statusId} type="checkbox" label={status.statusName}/>
            </div>))}</Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FilterArea;
