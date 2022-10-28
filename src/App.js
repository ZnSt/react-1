import "./index.css";
import { Component } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { MaterialEditorForm } from "./components/MaterialEditorForm";
import { MaterialList } from "./components/MaterialList";
import * as API from "./services/api";

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials });
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async (values) => {
    try {
      const material = await API.addMaterial(values);
      this.setState((prevState) => ({
        materials: [...prevState.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  deleteMaterial = async (id) => {
    try {
      await API.deleteMaterial(id);
      this.setState((prevState) => ({
        materials: prevState.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async (fields) => {
    try {
      const updatetMaterial = await API.updateMaterial(fields);
      this.setState((prevState) => ({
        materials: prevState.materials.map((material) =>
          material.id === fields.id ? updatetMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <>
        <GlobalStyle />
        {error && <p>Упс..., что-то не так, перезагрузите старницу еще раз</p>}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          "Загружаем материалы..."
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </>
    );
  }
}
