import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Form, Button, Row, Col } from "reactstrap";
import RenderField from "../RenderField";
import validate from "./validate";
import { connect } from "react-redux";
import { individualFormAction } from "../../actions/individualForm";
import { bindActionCreators } from "redux";
import radioRender from "../radioRender";
import { Agama, Tinggal } from "../dropdownRender";

class PersonalHome extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <center>
                  <h1>Biodata Klien</h1>
                </center>
              </Col>
            </Row>
            <Row>
            <Col md={6} xs={12}>
            <Field
              name="nama"
              type="text"
              component={RenderField}
              label="Nama Lengkap"
            />
            <Field
              name="tglLahir"
              type="date"
              component={RenderField}
              label="Tanggal Lahir"
            />
            <Field
              name="alamat"
              type="text"
              component={RenderField}
              label="Alamat Sekaranf"
            />
            <Field
              name="alamatKtp"
              type="text"
              component={RenderField}
              label="Alamat Pada KTP"
            />
            <Field
              name="noKtp"
              type="text"
              component={RenderField}
              label="Nomor KTP"
            />
              <Field
                name="kawin"
                type="text"
                component={RenderField}
                label="Status Perkawinan"
              />
            
            </Col>
            <Col md={6} xs={12}>
            <Field
              component={radioRender}
              name="kelamin"
              required={true}
              options={[
                { title: "Pria", value: "Pria" },
                { title: "Wanita", value: "Wanita" }
              ]}
              label="Jenis Kelamin"
            />
            <Field name="agama" component={Agama} label="Agama" />
            <Field name="tinggal" component={Tinggal} label="Tinggal Di" />
            <Field
              name="kendaraan"
              type="text"
              component={RenderField}
              label="Jenis Kendaraan"
            />
            <Field
              name="sim"
              type="text"
              component={RenderField}
              label="Jenis Sim"
            />
            <Field
              name="kepemilikan"
              type="text"
              component={RenderField}
              label="Status Kepemilikan Kendaraan"
            />
            </Col>
          </Row>
          <Row>
            <Col>
              <center>
                <Button color="success" type="submit" disabled={pristine || submitting}>
                  Submit
                </Button>
              </center>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    daftarYayasan: state.individualForm
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      individualFormAction
    },
    dispatch
  );
};

PersonalHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalHome);
export default reduxForm({
  form: "personal",
  validate
})(PersonalHome);
{/* <Field
              name="wali"
              type="text"
              component={RenderField}
              label="Nama Wali Atau Penanggung Jawab"
            />
            <Field
              name="noWali"
              type="text"
              component={RenderField}
              label="Nomor/Wa Wali"
            />
            <Field
              name="hubungan"
              type="text"
              component={RenderField}
              label="Hubungan Kekerabatan Dengan Wali"
            /> */}