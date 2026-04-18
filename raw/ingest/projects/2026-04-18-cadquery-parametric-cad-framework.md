<!-- GitHub Trending: Python | 4,946 stars | +57 today -->

# CadQuery/cadquery

> A python parametric CAD scripting framework based on OCCT

## Repository Info
- **URL**: https://github.com/CadQuery/cadquery
- **Stars**: 4,946
- **Forks**: 447
- **Language**: Python
- **License**: Other
- **Created**: 2018-10-28
- **Updated**: 2026-04-18
- **Topics**: 3d, brep, cad, dxf, modeling, occt, opencascade, parametric, python, step, stl
- **Open Issues**: 473

## README (excerpt)
![CadQuery logo](./doc/_static/logo/cadquery_logo_dark.svg)
# CadQuery

[![Appveyor Build status](https://ci.appveyor.com/api/projects/status/79ox42i6smelx7n8/branch/master?svg=true)](https://ci.appveyor.com/project/jmwright/cadquery-o18bh/branch/master)
[![Build Status](https://dev.azure.com/cadquery/conda-packages/_apis/build/status/CadQuery.cadquery?branchName=master)](https://dev.azure.com/cadquery/conda-packages/_build/latest?definitionId=2&branchName=master)
[![codecov](https://codecov.io/gh/CadQuery/cadquery/branch/master/graph/badge.svg)](https://codecov.io/gh/CadQuery/cadquery)
[![Documentation Status](https://readthedocs.org/projects/cadquery/badge/?version=latest)](https://cadquery.readthedocs.io/en/latest/?badge=latest)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.4498634.svg)](https://doi.org/10.5281/zenodo.3955118)

---

### Quick Links
[***Documentation***](https://cadquery.readthedocs.io/en/latest/) | [***Cheatsheet***](https://cadquery.readthedocs.io/en/latest/_static/cadquery_cheatsheet.html) | [***GitHub Discussions***](https://github.com/CadQuery/cadquery/discussions) | [***Google Group***](https://groups.google.com/g/cadquery) | [***GUI Editor***](https://github.com/CadQuery/CQ-editor)

---

## What is CadQuery

CadQuery is an intuitive, easy-to-use Python module for building parametric 3D CAD models. Using CadQuery, you can write short, simple scripts that produce high quality CAD models. It is easy to make many different objects using a single script that can be customized.

CadQuery is often compared to [OpenSCAD](http://www.openscad.org/). Like OpenSCAD, CadQuery is an open-source, script based, parametric model generator. However, CadQuery stands out in many ways and has several key advantages:

1. The scripts use a standard programming language, Python, and thus can benefit from the associated infrastructure. This includes many standard libraries and IDEs.
2. CadQuery's CAD kernel Open CASCADE Technology ([OCCT](https://en.wikipedia.org/wiki/Open_Cascade_Technology)) is much more powerful than the [CGAL](https://en.wikipedia.org/wiki/CGAL) used by OpenSCAD. Features supported natively by OCCT include NURBS, splines, surface sewing, STL repair, STEP import/export, and other complex operations, in addition to the standard CSG operations supported by CGAL
3. Ability to import/export [STEP](https://en.wikipedia.org/wiki/ISO_10303) and the ability to begin with a STEP model, created in a CAD package, and then add parametric features. This is possible in OpenSCAD using STL, but STL is a lossy format.
4. CadQuery scripts require less code to create most objects, because it is possible to locate features based on the position of other features, workplanes, vertices, etc.
5. CadQuery scripts can build STL, STEP, AMF and 3MF faster than OpenSCAD.

CadQuery was built to be used as a Python library without any GUI. This makes it great for use cases such as integration into servers, or creating scientific and engineering scripts.  Options for visualization are also available including CQ-Editor and JupyterLab.

For those who are interested, the [OCP repository](https://github.com/CadQuery/OCP) contains the current OCCT wrapper used by CQ.

### Key features
* Build 3D models with scripts that are as close as possible to how you would describe the object to a human.
* Create parametric models that can be very easily customized by end users.
* Output high quality (loss-less) CAD formats like STEP and DXF in addition to STL, VRML, AMF and 3MF.
* Provide a non-proprietary, plain text model format that can be edited and executed with only a web browser.
* Offer advanced modeling capabilities such as fillets, curvilinear extrudes, parametric curves and lofts.
* Build nested assemblies out of individual parts and other assemblies.

### Why this fork

The original version of CadQuery was built on the FreeCAD API. This was great because it allowed for fast development and easy cross-platform capability. However, we 